import { useState, useEffect } from "react";
import './index.css';

// Enhanced candidates data with photos
const initialCandidates = [
  { 
    id: 1, 
    name: "Aswithh", 
    department: "Computer Science", 
    position: "President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 2, 
    name: "Sushanth", 
    department: "Computer Science", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 3, 
    name: "Manikanta", 
    department: "Engineering", 
    position: "President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 4, 
    name: "Sai Niveed", 
    department: "Engineering", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 5, 
    name: "Jeswanth", 
    department: "Business", 
    position: "President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 6, 
    name: "Vijay", 
    department: "Business", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 7, 
    name: "Yaswanth", 
    department: "Business", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  }
];
// Default admin user
const defaultAdmin = {
  name: "System Administrator",
  email: "admin@mallareddyuniversity.ac.in",
  password: "admin123",
  studentId: "ADMIN001",
  department: "Administration",
  terms: true,
  isAdmin: true,
  hasVoted: false,
  votedCandidates: []
};

// Voting time configuration (in hours from now)
const VOTING_DURATION_HOURS = 3;
const VOTING_START_TIME = new Date().getTime();
const VOTING_END_TIME = VOTING_START_TIME + (VOTING_DURATION_HOURS * 60 * 60 * 1000);

// Initialize data in localStorage
const initializeData = () => {
  // Initialize candidates
  const existingCandidates = JSON.parse(localStorage.getItem('candidates'));
  if (!existingCandidates) {
    localStorage.setItem('candidates', JSON.stringify(initialCandidates));
  }

  // Initialize admin user - ALWAYS ensure admin exists
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const adminExists = existingUsers.find(user => user.studentId === 'ADMIN001');
  
  if (!adminExists) {
    console.log('Creating default admin user...');
    const updatedUsers = [...existingUsers, defaultAdmin];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    console.log('Admin created:', defaultAdmin);
  } else {
    console.log('Admin already exists:', adminExists);
  }

  // Debug: Log all users
  const allUsers = JSON.parse(localStorage.getItem('users')) || [];
  console.log('All users in localStorage:', allUsers);