import sys
import logging
import time
from os import system
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler, FileSystemEventHandler

def on_created(event):
    print("created")

def on_deleted(event):
    print("deleted")

def on_modified(event):
    print("modified")
    system('clear')
    system('./main.sh')
    print("\nfinished\n")

def on_moved(event):
    print("moved")

if __name__ == "__main__":
    event_handler = FileSystemEventHandler()
    
    path=""
    path = sys.argv[1] if len(sys.argv) > 1 else '.'

    event_handler.on_created = on_created
    event_handler.on_moved = on_moved
    event_handler.on_deleted = on_deleted
    event_handler.on_modified = on_modified

    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        print(f"monitoring:[{path}]")
        while True:
            time.sleep(1)
    finally:
        observer.stop()
        observer.join()