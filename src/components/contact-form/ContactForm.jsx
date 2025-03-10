export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5 text-sm font-light">
      <label htmlFor="name" className="w-full bg-primary-soft rounded-md">
        <input
          className="p-4 w-full outline-0"
          type="text"
          placeholder="Name and Surname"
          id="name"
          name="name"
        />
      </label>
      <label htmlFor="email" className="w-full bg-primary-soft rounded-md">
        <input
          className="p-4 w-full outline-0"
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
        />
      </label>
      <label htmlFor="number" className="w-full bg-primary-soft rounded-md">
        <input
          className="p-4 w-full outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder="Phone number (optional)"
          id="number"
          name="number"
        />
      </label>
      <label htmlFor="message" className="w-full bg-primary-soft rounded-md">
        <textarea
          className="p-4 w-full outline-0 resize-none"
          name="message"
          id="message"
          placeholder="Message"
          rows={10}
        ></textarea>
      </label>
      <button
        className="bg-txt-btn p-4 rounded-md font-bold cursor-pointer"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
