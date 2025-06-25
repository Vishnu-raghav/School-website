function Map(){

    return(
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28056.16106999881!2d77.2839314743164!3d28.478940300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce70e1209181b%3A0xe3c8555095ff708d!2sKrishna%20public%20school!5e0!3m2!1sen!2sin!4v1750690625905!5m2!1sen!2sin"
        // className="w-full h-[16rem]"
              width="100%"
      height="100%" 
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Krishna Public School Location"
      ></iframe>
    </div>
    )
}

export default Map