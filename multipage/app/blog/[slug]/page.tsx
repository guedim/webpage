export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Blog Post: {params.slug}</h1>
    </div>
  );
}
