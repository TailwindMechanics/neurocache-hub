// src\app\components\hero.tsx


interface HeroProps {
  title: string;
  body: string;
  btn: string;
}

export function Hero({ title, body, btn }: HeroProps) {  
  return (
    <section className="hero">
      <div className="flex items-center hero-content">
        <div> 
          <h1 className={`mb-5 text-5xl font-bold text-primary`}>
            {title}
          </h1>
          <p className={`mb-5 text-primary`}>
            {body}
          </p>
          <button className={`btn bg-primary text-background hover:text-secondary-focus hover:bg-primary-focus outline:none`}>
            {btn}
          </button>
        </div>
        <img src="images/neurocache.png" alt="NeuroCache logo" className="mr-5 w-32 h-32"/>
      </div>
    </section>
  );
}