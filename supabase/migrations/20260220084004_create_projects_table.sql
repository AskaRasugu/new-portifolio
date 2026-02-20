/*
  # Create projects table for portfolio

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `image_url` (text) - URL to project image/screenshot
      - `demo_url` (text, optional) - Live demo link
      - `github_url` (text, optional) - GitHub repository link
      - `technologies` (text array) - Technologies used in the project
      - `order` (integer) - Display order
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin to manage projects
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  demo_url text,
  github_url text,
  technologies text[] NOT NULL DEFAULT '{}',
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, demo_url, github_url, technologies, "order") VALUES
  (
    'E-Commerce Platform',
    'A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://example.com/demo',
    'https://github.com/AskaRasugu',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    1
  ),
  (
    'Task Management App',
    'Collaborative task management application with real-time updates and team features.',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://example.com/demo',
    'https://github.com/AskaRasugu',
    ARRAY['TypeScript', 'React', 'Supabase', 'Tailwind CSS'],
    2
  ),
  (
    'Weather Dashboard',
    'Real-time weather dashboard with location search and 7-day forecasts.',
    'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://example.com/demo',
    'https://github.com/AskaRasugu',
    ARRAY['JavaScript', 'React', 'Weather API', 'CSS'],
    3
  )
ON CONFLICT DO NOTHING;