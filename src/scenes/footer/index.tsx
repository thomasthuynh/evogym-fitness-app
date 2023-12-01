import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint culpa ipsam, molestiae maiores inventore mollitia fugiat. Corporis tempore consequatur nisi asperiores vel nam voluptas officia dolorem, consectetur veniam quia totam cum maiores! Sunt obcaecati vitae consectetur impedit molestiae tenetur cumque?</p>
          <p>Evogym All Rights Reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem, ipsum dolor.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer