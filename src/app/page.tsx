export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center text-center px-4">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to my website!
        </h1>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lorem quis tellus semper, et fermentum odio interdum. Aenean at ultrices orci, a ullamcorper felis. Praesent finibus, sem et tristique viverra, metus nunc aliquet diam, in interdum ante nisi at lectus.
        </p>
      </div>
    </div>
  )
}

Home.meta = {
  title: 'Your Title',
  favicon: '/favicon.ico',
}
