package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	router := gin.New()
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	err := godotenv.Load(".env")
	if err != nil {
		log.Printf("Error loading .env file: %s", err)
	}

	serverUrl := os.Getenv("SERVER_URL")
	if serverUrl == "" {
		log.Fatalf("SERVER_URL environment variable is not set")
	}

	routeMap := map[string]string{
		"events":   "/jobs/events",
		"blogs":    "/jobs/blogs",
		"projects": "/jobs/projects",
		"team":     "/jobs/teams",
	}

	router.GET(("/hit/:endpoint"), func(c *gin.Context) {
		endpoint := c.Param("endpoint")
		if route, ok := routeMap[endpoint]; ok {
			go hitEndpoint(route, serverUrl)
			c.JSON(200, gin.H{
				"message": "hit " + endpoint + " endpoint",
				"status":  "success",
			})
		} else {
			c.JSON(404, gin.H{
				"message": "endpoint not found",
				"status":  "error",
			})
		}
	})

	router.GET("/hit/all", func(c *gin.Context) {
		for _, route := range routeMap {
			go hitEndpoint(route, serverUrl)
		}
		c.JSON(200, gin.H{
			"message": "hit all endpoints",
			"status":  "success",
		})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8091"
	}
	if err := router.Run(":" + port); err != nil {
		log.Panicf("error: %s", err)
	}
}

func hitEndpoint(endpoint, serverUrl string) {
	response, err := http.Get(serverUrl + endpoint)
	if err != nil {
		log.Printf("Error hitting %s endpoint: %s", endpoint, err)
		return
	}
	// print response status code
	log.Printf("Hit %s endpoint: %s", endpoint, response.Status)
	defer response.Body.Close()
}
