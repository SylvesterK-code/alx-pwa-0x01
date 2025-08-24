# alx-project-0x14
API Explorer: Mastering RESTful Connections




# 🎬 CineSeek - MoviesDatabase API Documentation Summary

This document provides an overview of the MoviesDatabase API, which powers the **CineSeek Movie Discovery App**. It explains available endpoints, request/response formats, authentication requirements, and best practices.

---

## API Overview
The **MoviesDatabase API** provides access to a wide collection of movie data, including titles, genres, release years, and metadata.  
Key features include:
- Browse popular and recent movies
- Search movies by title, genre, or year
- Paginate through large movie datasets
- Retrieve detailed movie information

---

## Version
The current API version: **v1**

---

## Available Endpoints

| Endpoint          | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `/titles`         | Fetches a list of movies (supports filtering by year, genre, and pagination) |
| `/titles/{id}`    | Retrieves details for a single movie by its ID                               |
| `/titles/search`  | Searches movies by keyword (e.g., title or actor)                           |
| `/genres`         | Returns a list of available genres                                           |

---

## Request and Response Format

### Example Request
```http
GET https://moviesdatabase.p.rapidapi.com/titles?year=2020&genre=action&page=1
Headers:
  X-RapidAPI-Key: <your_api_key>
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com








mkdir -p components/commons
mkdir -p components/layouts





ni components/commons/Button.tsx

ni components/commons/Loading.tsx

ni components/commons/MovieCard.tsx

ni components/layouts/Header.tsx

ni components/layouts/Footer.tsx

ni components/layouts/Layout.tsx

ni components/layouts/Button.tsx


























# alx-pwa-0x01
ProWeb Pulse: Mastering PWA Fundamentals

