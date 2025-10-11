const Locate = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.288624504991!2d3.951265479533097!3d7.396629683961823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103993e37f5db02f%3A0x2d747bb0f98c158d!2sComfort%20Life%20Mission%20International!5e0!3m2!1sen!2sng!4v1760213250735!5m2!1sen!2sng";

  return (
    <div className="my-15">
      <h3 className="font-bold text-4xl text-primary text-center mb-15">Locate Comfort life Mission</h3>
      <div className="bg-neutral-300 mt-8 h-108 max-w-7xl mx-auto">
        <div className="map-container relative w-full h-full bg-gray-300 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Comfort Life Mission International, Gbagi Ibadan"
            src={mapSrc}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Locate