import sqlalchemy
import sqlalchemy.orm
import passlib.hash
from datetime import datetime

import database

class User(database.Base):
    __tablename__="users"
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True, autoincrement=True)
    username = sqlalchemy.Column(sqlalchemy.String(256), primary_key=True, index=True)
    email = sqlalchemy.Column(sqlalchemy.String(256), primary_key=True, index=True)
    hashed_password = sqlalchemy.Column(sqlalchemy.String(256))
    full_name = sqlalchemy.Column(sqlalchemy.String(256))
    profile_picture = sqlalchemy.Column(sqlalchemy.Text, default="#")
    created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now())
    posts = sqlalchemy.orm.relationship("Post")
    friends = sqlalchemy.orm.relationship("Frienship")

    def verify_password(self, password: str):
        return passlib.hash.bcrypt.verify(password, self.hashed_password)


class Post(database.Base):
    __tablename__="posts"
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True, autoincrement=True)
    user_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"), primary_key=True, index=True)
    created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now())
    image = sqlalchemy.Column(sqlalchemy.Text, default="#")
    inner_text = sqlalchemy.Column(sqlalchemy.String(1000), default="")
    comment = sqlalchemy.orm.relationship("Comment")
    likes = sqlalchemy.orm.relationship("Like")


class Comment(database.Base):
    __tablename__="comments"
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True, autoincrement=True)
    post_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("posts.id"), primary_key=True, index=True)
    user_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("posts.user_id"), primary_key=True, index=True)
    created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now())
    inner_text = sqlalchemy.Column(sqlalchemy.String(1000), default="")


class Like(database.Base):
    __tablename__="likes"
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True, autoincrement=True)
    post_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("posts.id"), primary_key=True, index=True)
    user_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("posts.user_id"), primary_key=True, index=True)
    created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now())


class Friendship(database.Base):
    __tablename__="friendships"
    sender_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"), primary_key=True, index=True)
    receiver_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"), primary_key=True, index=True)
    created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now())


class Conversation(database.Base):
    __tablename__="conversations"
    first_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"), primary_key=True, index=True)
    second_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"), primary_key=True, index=True)
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True, autoincrement=True)
    messages = sqlalchemy.orm.relationship("Message")


class Message(database.Base):
    __tablename__="messages"
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True, autoincrement=True)
    conversation_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("conversations.id"), primary_key=True, index=True)
    created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.now())
    inner_text = sqlalchemy.Column(sqlalchemy.String(1000), default="")
    read = sqlalchemy.Column(sqlalchemy.Boolean, default=False)
    image = sqlalchemy.Column(sqlalchemy.Text, default="#")
