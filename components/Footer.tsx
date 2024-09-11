export default function Footer() {
  return (
    <footer className='bg-gray-200 p-4 text-center'>
      <p className=" text-zinc-900">
        &copy; {new Date().getFullYear()} FINNMareka Oy. Kaikki oikeudet
        pidätetään.
      </p>
    </footer>
  );
}
