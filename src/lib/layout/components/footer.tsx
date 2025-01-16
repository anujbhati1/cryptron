export const Footer = () => {
  return (
    <footer className='wrapper'>
      <div className='flex'>
        <p className='text-xs'>
          {new Date().getFullYear()} -{" "}
          <a
            href='https://google.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            cryptron.com
          </a>
        </p>
      </div>
    </footer>
  );
};
