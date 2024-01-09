const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-950 text-white p-4">
      {/* Your footer content goes here */}
      <p>
        &copy; {new Date().getFullYear()} Your Website Name. All rights
        reserved.
      </p>
      {/* Add any other footer information or links */}
    </footer>
  )
}

export default Footer
