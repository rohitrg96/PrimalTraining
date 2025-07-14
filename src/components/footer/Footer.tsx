interface FooterProps {
  bgColor?: string;
  brandName?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const Footer = ({
  bgColor = 'bg-violet-100',
  brandName = 'PrimalTraining',
  contactEmail = 'hello@figma.com',
  contactPhone = '(203) 555-5555',
}: FooterProps) => {
  return (
    <footer
      className={`w-full ${bgColor} text-black p-6 flex flex-col justify-between h-full min-h-[400px]`}
    >
      {/* Top Section - Logo and Brand */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex">
            <span className="h-16 w-8 rounded-l-full bg-black mt-4"></span>
            <span className="h-20 w-10 rounded-l-full bg-black mt-2"></span>
            <span className="h-24 w-24 rounded-full bg-black"></span>
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="text-5xl font-bold mt-4 md:mt-0">{brandName}</h2>
      </div>

      <div className="flex-grow" />

      {/* Bottom Section - Three Columns */}
      <div className="flex flex-col md:flex-row md:justify-between w-full text-left mt-6 space-y-6 md:space-y-0">
        {/* Contact */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold">CONTACT</h3>
          <p className="font-semibold">Email: {contactEmail}</p>
          <p className="font-semibold">Phone: {contactPhone}</p>
        </div>

        {/* Opening Hours */}
        <div className="w-full md:w-1/3 md:text-center">
          <h3 className="text-lg font-semibold">Opening Hours</h3>
          <p className="font-semibold">MON – FRI: 5:00 – 23:00</p>
          <p className="font-semibold">SATURDAYS: 8:00 – 16:00</p>
          <p className="font-semibold">SUNDAYS: 8:00 – 13:00</p>
          <p className="font-semibold">HOLIDAYS: 8:00 – 16:00</p>
        </div>

        {/* Social */}
        <div className="w-full md:w-1/3 md:text-right text-left">
          <h3 className="text-lg font-semibold">Social</h3>
          <p className="font-semibold">Instagram</p>
          <p className="font-semibold">X</p>
          <p className="font-semibold">LinkedIn</p>
          <p className="font-semibold">Spotify</p>
        </div>
      </div>
    </footer>
  );
};
