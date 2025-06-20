const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Voyaglog. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://twitter.com/syriacano" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            Twitter
          </a>
          <a
            href="https://github.com/syricano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="/contact"
            className="hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
