import './Portfolio.css'



var data = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/tags-with-sale-word_1156-327.jpg",
    title:
      "Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/shopping_mall/",
  },

  {
    id: 2,
    image: "https://images.unsplash.com/photo-1580793241553-e9f1cce181af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title:
      "Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/shopping_mall/",
  },
  {
    id: 3,
    image: "https://appdukaan.com/wp-content/uploads/2021/02/app-like-myntra-development.jpg",
    title: "Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Myntra_website/",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnTTduE_Sd3J5Kf-0Gld1mtc7P3Y45PDwJ1zFWzhp-Ypq4cWCZFzkaG7mCn-i5EOHfG8&usqp=CAU",
    title: "Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Electronic_web/",
  },

  {
    id: 5,
    image: "https://img.freepik.com/free-psd/medical-horizontal-banner-template_23-2148940482.jpg",
    title: "Doctor Klein Good morning Cecilia how are you feeling today I have seen these symptoms recently in some of my other patients",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Vaid_G_UI/",
  },
  {
    id: 6,
    image: "https://img.freepik.com/free-psd/medical-horizontal-banner-template_23-2148940482.jpg",
    title: "Doctor Klein Good morning Cecilia how are you feeling today I have seen these symptoms recently in some of my other patients",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Vaid_G_UI/",
  },
];

const Portfolio = () => {
  return (
    <div className='contaner-flued px-5 py-4'>
      <div className='text-center py-3'>
        <h3 style={{color:'#FFF'}} >My Recent Work</h3>
        <h1 style={{color: "#f9bf8f"}} >Portfolio</h1>
      </div>
      <div className='row g-5'>
        {data?.map(({ id, image, title, github, demo }) => {
          return (
            <div key={id} className='col-lg-4 col-md-6 col-sm-12'>
              <div className="card text-white portfolio__item" >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <div className='py-3 d-flex justify-content-between'>
                  <a href={github} className="btn button">GitHub</a>
                  <a href={demo} className="btn button">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Portfolio
