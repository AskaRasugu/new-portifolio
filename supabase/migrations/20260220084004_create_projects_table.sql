-- First, ensure the table is ready (running this won't hurt if it already exists)
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

-- Clear existing entries if you want a fresh start, otherwise ON CONFLICT will handle it
-- DELETE FROM projects; 

INSERT INTO projects (title, description, image_url, demo_url, github_url, technologies, "order") 
VALUES
  (
    'Cloud Wage – Payroll Management System',
    'A comprehensive payroll management system developed for Lions Hospital and other enterprise clients, featuring attendance integration with ZKBioTime and automated payroll processing.',
    'https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg',
    'https://lions.cloudwage.com',
    'https://github.com/AskaRasugu',
    
    ARRAY['PHP', 'Laravel', 'Microsoft SQL Server', 'MySQL', 'Docker'],
    1
  ),
  (
    'Cloud HR – HR Management System',
    'A comprehensive human resources management system developed for Lions Client and other Enterprise Clienst, featuring employee management and attendance tracking.',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    'https://lions.cloudhr.biz/',
    'https://github.com/AskaRasugu',
    ARRAY['PHP', 'Laravel', 'Microsoft SQL Server', 'MySQL', 'Docker'],
    2
  ),
  (
    'Open Roads CRM',
    'A comprehensive CRM system designed to streamline customer interactions, manage leads, and enhance sales processes with robust analytics.',
    'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    NULL,
    NULL,
    ARRAY['Vue.js', 'PHP', 'Laravel/Lumen', 'MySQL'],
    3
  ),
  (
    'LP Management System',
    'A web-based application that simplifies the management of license plates, providing features for tracking and reporting.',
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    NULL,
    NULL,
    ARRAY['Vue.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    4
  ),
  (
    'TIMS System',
    'A transponder management system that provides real-time tracking and management of transponders.',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    NULL,
    NULL,
    ARRAY['Vue.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    5
  ),
  (
    'My Portfolio',
    'A modern personal portfolio website showcasing my projects, skills, and contact information, built with React, TypeScript, Tailwind CSS, and Supabase for backend data management.',
    'https://your-supabase-storage-url/portfolio.jpg', -- Replace with your uploaded image URL
    'https://your-portfolio-demo-url.com',
    'https://github.com/AskaRasugu/portfolio',
    ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    6
  )
ON CONFLICT DO NOTHING;