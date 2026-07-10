# FinBangla Voice Backend API Reference

Base URL:

```text
https://finbangla-voice-backend-production.up.railway.app
```

Protected endpoints should send the JWT token returned by Google login:

```http
Authorization: Bearer <jwt_token>
```

## 1. Health Check and General Info

### GET `/`

Returns basic API information.

Response:

```json
{
  "message": "FinBangla Voice Blog API",
  "status": "success",
  "version": "1.0.0",
  "mode": "release",
  "timestamp": 1704067200
}
```

### GET `/health`

Returns application and database health status.

Response:

```json
{
  "status": "healthy",
  "database": "connected",
  "mode": "release",
  "timestamp": 1704067200
}
```

## 2. Authentication

### GET `/auth/google/login`

Starts Google OAuth login.

Response:

```json
{
  "auth_url": "https://accounts.google.com/oauth/...",
  "message": "Redirect to this URL to login with Google",
  "state": "random_state_string"
}
```

### GET `/auth/google/callback`

Google OAuth callback endpoint.

Success behavior:

```text
Redirects to: {FRONTEND_URL}/auth/success?token={jwt_token}
```

## 3. Blog Posts / Articles

### GET `/api/posts`

Gets all blog posts.

Response:

```json
{
  "success": true,
  "posts": [
    {
      "id": 1,
      "title": "string",
      "excerpt": "string",
      "author": "string",
      "image": "string",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### GET `/api/posts/published`

Gets only published blog posts.

Response:

```json
{
  "success": true,
  "posts": [
    {
      "id": 1,
      "title": "string",
      "excerpt": "string",
      "author": "string",
      "image": "string",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### GET `/api/posts/:id`

Gets a single blog post by ID.

Response:

```json
{
  "success": true,
  "post": {
    "id": 1,
    "title": "string",
    "excerpt": "string",
    "author": "string",
    "image": "string",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

### POST `/api/posts`

Creates a new blog post. Protected.

Request:

```json
{
  "title": "string",
  "excerpt": "string",
  "author": "string",
  "image": "string"
}
```

Response:

```json
{
  "success": true,
  "message": "Post created successfully",
  "post": {
    "id": 1,
    "title": "string",
    "excerpt": "string",
    "author": "string",
    "image": "string",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

### PUT `/api/posts/:id`

Updates an existing blog post. Protected.

Request:

```json
{
  "title": "string",
  "excerpt": "string",
  "author": "string",
  "image": "string"
}
```

Response:

```json
{
  "success": true,
  "message": "Post updated successfully",
  "post": {
    "id": 1,
    "title": "string",
    "excerpt": "string",
    "author": "string",
    "image": "string",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

### DELETE `/api/posts/:id`

Deletes a blog post. Protected.

Response:

```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```

## 4. Comments and Replies

### GET `/api/blogs/:blogId/comments`

Gets all comments for a blog post.

Response:

```json
{
  "success": true,
  "comments": [
    {
      "id": 1,
      "blogId": 1,
      "name": "string",
      "email": "string",
      "text": "string",
      "timestamp": "2024-01-01T00:00:00Z",
      "replies": []
    }
  ]
}
```

### POST `/api/blogs/:blogId/comments`

Creates a comment on a blog post.

Request:

```json
{
  "blogId": 1,
  "name": "string",
  "email": "string",
  "text": "string"
}
```

Response:

```json
{
  "success": true,
  "message": "Comment created successfully",
  "comment": {
    "id": 1,
    "blogId": 1,
    "name": "string",
    "email": "string",
    "text": "string",
    "timestamp": "2024-01-01T00:00:00Z"
  }
}
```

### PUT `/api/comments/:id`

Updates a comment.

Request:

```json
{
  "text": "string"
}
```

Response:

```json
{
  "success": true,
  "message": "Comment updated successfully",
  "comment": {
    "id": 1,
    "blogId": 1,
    "name": "string",
    "email": "string",
    "text": "string",
    "timestamp": "2024-01-01T00:00:00Z"
  }
}
```

### DELETE `/api/comments/:id`

Deletes a comment.

Response:

```json
{
  "success": true,
  "message": "Comment deleted successfully"
}
```

### POST `/api/comments/:id/reply`

Creates a reply for a comment.

Request:

```json
{
  "name": "string",
  "email": "string",
  "text": "string"
}
```

Response:

```json
{
  "success": true,
  "message": "Reply created successfully",
  "reply": {
    "id": 1,
    "comment_id": 1,
    "name": "string",
    "email": "string",
    "text": "string",
    "isAdmin": false,
    "timestamp": "2024-01-01T00:00:00Z"
  }
}
```

### GET `/api/comments/:id/replies`

Gets all replies for a comment.

Response:

```json
{
  "success": true,
  "replies": [
    {
      "id": 1,
      "comment_id": 1,
      "name": "string",
      "email": "string",
      "text": "string",
      "isAdmin": false,
      "timestamp": "2024-01-01T00:00:00Z"
    }
  ]
}
```

## 5. Sessions

### GET `/api/sessions`

Gets all sessions.

Response:

```json
[
  {
    "id": 1,
    "session_id": "string",
    "course_name": "string",
    "instructor": {
      "name": "string",
      "profile_url": "string",
      "photo_url": "string"
    },
    "session_type": "string",
    "duration": "string",
    "rate": "string",
    "total_cost": "string",
    "overview": "string",
    "session_link": "string",
    "contact_options": {
      "whatsapp": "string",
      "email": "string"
    },
    "session_schedule": {
      "date": "string",
      "time": "string"
    }
  }
]
```

### GET `/api/sessions/:id`

Gets a single session by ID.

Response:

```json
{
  "id": 1,
  "session_id": "string",
  "course_name": "string",
  "instructor": {
    "name": "string",
    "profile_url": "string",
    "photo_url": "string"
  },
  "session_type": "string",
  "duration": "string",
  "rate": "string",
  "total_cost": "string",
  "overview": "string",
  "session_link": "string",
  "contact_options": {
    "whatsapp": "string",
    "email": "string"
  },
  "session_schedule": {
    "date": "string",
    "time": "string"
  }
}
```

### POST `/api/sessions`

Creates a new session.

Request:

```json
{
  "session_id": "string",
  "course_name": "string",
  "instructor": {
    "name": "string",
    "profile_url": "string",
    "photo_url": "string"
  },
  "session_type": "string",
  "duration": "string",
  "rate": "string",
  "total_cost": "string",
  "overview": "string",
  "session_link": "string",
  "contact_options": {
    "whatsapp": "string",
    "email": "string"
  },
  "session_schedule": {
    "date": "string",
    "time": "string"
  }
}
```

Response:

```json
{
  "success": true,
  "session": {
    "id": 1,
    "session_id": "string",
    "course_name": "string",
    "instructor": {
      "name": "string",
      "profile_url": "string",
      "photo_url": "string"
    },
    "session_type": "string",
    "duration": "string",
    "rate": "string",
    "total_cost": "string",
    "overview": "string",
    "session_link": "string",
    "contact_options": {
      "whatsapp": "string",
      "email": "string"
    },
    "session_schedule": {
      "date": "string",
      "time": "string"
    }
  }
}
```

### PUT `/api/sessions/:id`

Updates a session. All request fields are optional.

Request:

```json
{
  "session_id": "string",
  "course_name": "string",
  "instructor": {
    "name": "string",
    "profile_url": "string",
    "photo_url": "string"
  },
  "session_type": "string",
  "duration": "string",
  "rate": "string",
  "total_cost": "string",
  "overview": "string",
  "session_link": "string",
  "contact_options": {
    "whatsapp": "string",
    "email": "string"
  },
  "session_schedule": {
    "date": "string",
    "time": "string"
  }
}
```

Response:

```json
{
  "success": true,
  "session": {
    "id": 1,
    "session_id": "string",
    "course_name": "string",
    "instructor": {
      "name": "string",
      "profile_url": "string",
      "photo_url": "string"
    },
    "session_type": "string",
    "duration": "string",
    "rate": "string",
    "total_cost": "string",
    "overview": "string",
    "session_link": "string",
    "contact_options": {
      "whatsapp": "string",
      "email": "string"
    },
    "session_schedule": {
      "date": "string",
      "time": "string"
    }
  }
}
```

### DELETE `/api/sessions/:id`

Deletes a session.

Response:

```json
{
  "success": true,
  "message": "Session deleted successfully"
}
```

## 6. Courses

### GET `/api/courses`

Gets all courses.

Response:

```json
[
  {
    "id": 1,
    "course_name": "string",
    "instructor": {
      "name": "string",
      "photo_url": "string",
      "bio": "string"
    },
    "course_details": {
      "duration": "string",
      "schedule": "string",
      "session_mode": "string",
      "rate": "string",
      "total_fee": "string",
      "material": "string",
      "session_overview": "string"
    },
    "contact": {
      "whatsapp": "string",
      "email": "string"
    },
    "enrollment": {
      "button_text": "string",
      "url": "string"
    }
  }
]
```

### GET `/api/courses/:id`

Gets a single course by ID.

Response:

```json
{
  "id": 1,
  "course_name": "string",
  "instructor": {
    "name": "string",
    "photo_url": "string",
    "bio": "string"
  },
  "course_details": {
    "duration": "string",
    "schedule": "string",
    "session_mode": "string",
    "rate": "string",
    "total_fee": "string",
    "material": "string",
    "session_overview": "string"
  },
  "contact": {
    "whatsapp": "string",
    "email": "string"
  },
  "enrollment": {
    "button_text": "string",
    "url": "string"
  }
}
```

### POST `/api/courses`

Creates a new course.

Request:

```json
{
  "course_name": "string",
  "instructor": {
    "name": "string",
    "photo_url": "string",
    "bio": "string"
  },
  "course_details": {
    "duration": "string",
    "schedule": "string",
    "session_mode": "string",
    "rate": "string",
    "total_fee": "string",
    "material": "string",
    "session_overview": "string"
  },
  "contact": {
    "whatsapp": "string",
    "email": "string"
  },
  "enrollment": {
    "button_text": "string",
    "url": "string"
  }
}
```

Response:

```json
{
  "success": true,
  "course": {
    "id": 1,
    "course_name": "string",
    "instructor": {
      "name": "string",
      "photo_url": "string",
      "bio": "string"
    },
    "course_details": {
      "duration": "string",
      "schedule": "string",
      "session_mode": "string",
      "rate": "string",
      "total_fee": "string",
      "material": "string",
      "session_overview": "string"
    },
    "contact": {
      "whatsapp": "string",
      "email": "string"
    },
    "enrollment": {
      "button_text": "string",
      "url": "string"
    }
  }
}
```

### PUT `/api/courses/:id`

Updates a course. All request fields are optional.

Request:

```json
{
  "course_name": "string",
  "instructor": {
    "name": "string",
    "photo_url": "string",
    "bio": "string"
  },
  "course_details": {
    "duration": "string",
    "schedule": "string",
    "session_mode": "string",
    "rate": "string",
    "total_fee": "string",
    "material": "string",
    "session_overview": "string"
  },
  "contact": {
    "whatsapp": "string",
    "email": "string"
  },
  "enrollment": {
    "button_text": "string",
    "url": "string"
  }
}
```

Response:

```json
{
  "success": true,
  "course": {
    "id": 1,
    "course_name": "string",
    "instructor": {
      "name": "string",
      "photo_url": "string",
      "bio": "string"
    },
    "course_details": {
      "duration": "string",
      "schedule": "string",
      "session_mode": "string",
      "rate": "string",
      "total_fee": "string",
      "material": "string",
      "session_overview": "string"
    },
    "contact": {
      "whatsapp": "string",
      "email": "string"
    },
    "enrollment": {
      "button_text": "string",
      "url": "string"
    }
  }
}
```

### DELETE `/api/courses/:id`

Deletes a course.

Response:

```json
{
  "success": true,
  "message": "Course deleted successfully"
}
```

## Admin Panel Endpoint Groups

Use these endpoint groups for an admin panel:

```text
Articles: /api/posts, /api/posts/:id
Sessions: /api/sessions, /api/sessions/:id
Courses:  /api/courses, /api/courses/:id
Auth:     /auth/google/login, /auth/google/callback
```

