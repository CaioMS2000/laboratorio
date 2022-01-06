from typing import List
import json

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

# source ./venv/bin/activate && uvicorn main:app --reload
# ./venv/Scripts/activate && uvicorn main:app --reload

app = FastAPI()

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <h2>Your ID: <span id="ws-id"></span></h2>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var client_id = Date.now()
            document.querySelector("#ws-id").textContent = client_id;
            var ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        print(f'{len(self.active_connections)} connections')

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        print(f'{len(self.active_connections)} connections')

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    # async def broadcast(self, message: str, websocket: WebSocket):
    async def broadcast(self, message, websocket: WebSocket):
        print(f'broadcast', flush=True)
        cont = 0
        for connection in self.active_connections:
            print(f'for do broadcast', flush=True)
            if connection is not websocket and connection is not self:
                cont = cont + 1
                print(f'cont: {cont}\nvai enviar\n{message}\n', flush=True)
                await connection.send_text(message)
                # await connection.send(message.message)


manager = ConnectionManager()


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # await websocket.send_text("B: just received something\n")
            #
            # await manager.send_personal_message(f"You wrote: {data}", websocket)
            # await manager.broadcast(f"Client #{client_id} says: {data}", websocket)
            await manager.broadcast(f'"nick":"{client_id}", "msg":"{data}"', websocket)

    except WebSocketDisconnect:

        manager.disconnect(websocket)

        # await manager.broadcast(f"Client #{client_id} left the chat", websocket)
