-- JAD KRONO 3.0 Supabase Setup
-- Run this inside Supabase SQL Editor.

create table if not exists public.watches (
  id text primary key,
  brand text not null,
  model text not null,
  reference text not null,
  year text,
  condition text,
  "set" text,
  status text default 'Available',
  price text default 'Price on request',
  category text default 'other',
  featured boolean default true,
  image text,
  gallery jsonb default '[]'::jsonb,
  specs jsonb default '{}'::jsonb,
  description text,
  created_at timestamptz default now()
);

alter table public.watches enable row level security;

drop policy if exists "Public can read watches" on public.watches;
create policy "Public can read watches"
on public.watches
for select
using (true);

drop policy if exists "Authenticated can manage watches" on public.watches;
create policy "Authenticated can manage watches"
on public.watches
for all
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('watch-images', 'watch-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view watch images" on storage.objects;
create policy "Public can view watch images"
on storage.objects
for select
using (bucket_id = 'watch-images');

drop policy if exists "Authenticated can upload watch images" on storage.objects;
create policy "Authenticated can upload watch images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'watch-images');

drop policy if exists "Authenticated can update watch images" on storage.objects;
create policy "Authenticated can update watch images"
on storage.objects
for update
to authenticated
using (bucket_id = 'watch-images')
with check (bucket_id = 'watch-images');

drop policy if exists "Authenticated can delete watch images" on storage.objects;
create policy "Authenticated can delete watch images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'watch-images');
