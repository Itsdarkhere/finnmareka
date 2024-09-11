export default function Footer() {
  return (
    <footer className='bg-header-pattern bg-repeat p-4 text-center'>
      <p className=" text-gray-200">
        &copy; {new Date().getFullYear()} FINNMareka Oy. Kaikki oikeudet
        pidätetään.
      </p>
    </footer>
  );
}
