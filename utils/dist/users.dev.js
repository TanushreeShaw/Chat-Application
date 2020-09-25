"use strict";

var users = []; //join user to chat

function userJoin(id, username, room) {
  var user = {
    id: id,
    username: username,
    room: room
  };
  users.push(user);
  return user;
} //Get current user


function getCurrentUser(id) {
  return users.find(function (user) {
    return user.id === id;
  });
} //user leaves the chat


function userLeave(id) {
  var index = users.findIndex(function (user) {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
} //Get room users


function getRoomUsers(room) {
  return users.filter(function (user) {
    return user.room === room;
  });
}

module.exports = {
  userJoin: userJoin,
  getCurrentUser: getCurrentUser,
  userLeave: userLeave,
  getRoomUsers: getRoomUsers
};