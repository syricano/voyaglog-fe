const voyagStyle = {
  // === Layout & Containers ===
  pageContainer: "min-h-screen bg-base-100 flex flex-col items-center justify-center",
  sectionContainer: "container mx-auto px-4 md:px-0",
  formContainer: "max-w-2xl w-full bg-base-100 shadow-md rounded-lg p-8",
  cardBody: "card-body flex flex-col flex-grow",

  // === Hero Sections (Shared) ===
  heroSection: "text-center py-24 bg-base-200 rounded-lg shadow-lg mx-4 md:mx-0",
  heroTitle: "text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 via-purple-600 p-2 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-bounceOnce select-none",
  heroSubtitle: "mt-4 text-lg text-base-content/70 transition-colors duration-300",
  heroButton: "btn btn-primary mt-8 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300",

  // === Section Titles & CTA ===
  sectionTitle: "text-3xl font-semibold mb-6 text-base-content select-none",
  ctaSection: "text-center py-12",
  ctaTitle: "text-3xl font-semibold text-base-content select-none",
  ctaButton: "btn btn-secondary mt-6 px-10 py-3 text-lg font-semibold shadow-md hover:shadow-xl transition-shadow duration-300",

  // === Blog Cards ===
  blogGrid: "grid md:grid-cols-3 gap-8",
  blogCardContainer: "card bg-base-100 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col",
  cardTitle: "card-title text-xl font-bold text-base-content select-none",
  cardContent: "flex-grow text-base-content/70 mt-2",
  readMoreButton: "btn btn-sm btn-outline hover:bg-primary hover:text-white transition-colors duration-300",

  // === Blog Details ===
  blogDetailsWrapper: "container mx-auto px-4 md:px-0 py-12",
  blogDetailsTitle: "text-4xl font-bold mb-4 text-base-content select-none",
  blogDetailsMeta: "text-base-content/70 mb-6",
  blogDetailsImage: "w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out mb-6",
  blogDetailsContent: "text-base-content/70 leading-relaxed mb-8",
  blogDetailsBack: "btn btn-secondary mt-6 px-10 py-3 text-lg font-semibold shadow-md hover:shadow-xl transition-shadow duration-300",

  // === About Page ===
  aboutWrapper: "max-w-4xl mx-auto p-8 mt-10 bg-base-200 rounded shadow-md flex-1/2",
  aboutTitle: "text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-md animate-bounceOnce select-none",
  aboutParagraph: "mb-4 text-lg leading-relaxed hover:text-primary transition-colors duration-300 cursor-pointer",


  // === Forms ===
  form: "space-y-4",
  input: "input input-bordered w-full",
  textarea: "textarea textarea-bordered w-full",
  submitButton: "btn btn-primary w-full",

  // === Signup / Login Pages ===
  signupWrapper: "max-w-md mx-auto p-4 mt-10 border rounded shadow",
  signupTitle: "text-2xl mb-4 font-semibold text-center",
  errorText: "text-red-500 mb-3",
  loginContainer: "flex flex-col items-center justify-center min-h-screen bg-base-100",
  loginCard: "card w-96 bg-base-100 shadow-md p-6",
  loginTitle: "text-xl font-semibold mb-4",
  loginText: "mt-4 text-center text-sm text-base-content/70",
  loginLink: "text-primary underline hover:text-primary-focus transition-colors duration-300",
  loginButton: "btn btn-primary w-full",

  // === Images ===
  featuredImage: "w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer",

  // === Footer ===
  footer: "bg-base-200 text-base-content py-6 mt-16",
  footerContainer: "container mx-auto px-4 flex flex-col md:flex-row justify-between items-center",
  footerText: "text-sm",
  footerLinks: "flex space-x-6 mt-4 md:mt-0",
  footerLink: "hover:text-primary transition-colors duration-300 cursor-pointer",
  
};

export default voyagStyle;
