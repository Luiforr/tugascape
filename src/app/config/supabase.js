import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ugdhqxqgxwexwgdegjlq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZGhxeHFneHdleHdnZGVnamxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2Njg4MDQsImV4cCI6MjAyMTI0NDgwNH0.1_mjw3RugW21XwKkumnkpMJRhROrx6m-vx3SJF3iGo0')
