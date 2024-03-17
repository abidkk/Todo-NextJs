const todos = [
  { id: 1001, name: "Abid Ali Khokhar", course: "Typescript" },
  { id: 1002, name: "Noman Ali Khan", course: "Javascript" },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(todos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST API
// app/api/products/route.js
export async function POST(request: Request) {
  try {
    // Parse the request body (usually JSON format)
    const newTodos = await request.json();
    // Validate incoming data (add checks for required fields, data types, etc.)
    if (!newTodos.id || !newTodos.name || !newTodos.course) {
      throw new Error("Missing required fields: name and course");
    }

    if (todos.some((todo) => todo.id === newTodos.id)) {
      throw new Error("Already Exists");
    }

    // Expected output: 12

    // Add the new todo to the todos array (consider using a database for persistence)
    todos.push(newTodos);

    // Implement your logic to create a new product using the data (e.g., save to a database)
    // const createdProduct = await createProduct(newProductData); // Replace with your creation logic

    return new Response(JSON.stringify(todos), {
      status: 201, // Created status code
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors appropriately (e.g., validation errors, database errors)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400, // Bad Request status code for errors
      headers: { "Content-Type": "application/json" },
    });
  }
}



// DELETE API
// app/api/todos/route.js
export async function DELETE(request: Request) {
  try {
    // Parse the request URL to extract the ID of the item to delete
    const url = new URL(request.url);
    const id = parseInt(url.searchParams.get('id'), 10); // Assuming 'id' is the query parameter

    // Check if the ID is provided and valid
    if (!id || isNaN(id)) {
      throw new Error('Missing or invalid ID in request');
    }

    // Find the index of the item to delete (consider performance for large arrays)
    const itemIndex = todos.findIndex((todo) => todo.id === id);

    // Check if the item exists
    if (itemIndex === -1) {
      throw new Error('Item not found');
    }

    // Remove the item from the todos array
    todos.splice(itemIndex, 1);

    return new Response(JSON.stringify({ message: 'Item deleted successfully' }), {
      status: 200, // OK status code
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors appropriately
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400, // Bad Request status code for errors
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// http://localhost:3000/api/todos/?id=1001


// PUT API
export async function PUT(request: Request) {
  try {
    // Parse the request body (usually JSON format)
    const updatedTodo = await request.json();

    // Validate incoming data (add checks for required fields, data types, etc.)
    if (!updatedTodo.id || !updatedTodo.name || !updatedTodo.course) {
      throw new Error('Missing required fields: id, name, and course');
    }

    // Find the index of the todo item to update
    const itemIndex = todos.findIndex((todo) => todo.id === updatedTodo.id);

    // Check if the item exists
    if (itemIndex === -1) {
      throw new Error('Item not found');
    }

    // Update the todo item with the new data
    todos[itemIndex] = updatedTodo; // Replace with the entire updated object

    return new Response(JSON.stringify({ message: 'Todo updated successfully' }), {
      status: 200, // OK status code
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors appropriately (e.g., validation errors, database errors)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400, // Bad Request status code for errors
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
// http://localhost:3000/api/todos/