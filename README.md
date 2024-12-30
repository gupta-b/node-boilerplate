# API Routes Documentation

## Endpoints

### Get All Posts
- **URL**: `/posts/`
- **Method**: GET
- **Description**: Retrieves a list of all posts.
- **Response**: 
    ```json
    {
    "success": true,
    "data": [
        {
        "id": 1,
        "title": "post 1"
        },
        {
        "id": 2,
        "title": "post 2"
        },
        {
        "id": 3,
        "title": "post 3"
        }
    ]
    }
    ```

### Get Post by ID
- **URL**: `/posts/:id`
- **Method**: GET
- **Description**: Retrieves the details of a specific post by its ID.
- **Response**: 
    ```json
    {
        "success": true,
        "data": {
            "id": 1,
            "title": "post 1"
        }
    }
    ```

### Create Post
- **URL**: `/posts`
- **Method**: POST
- **Description**: Creates a new post.
