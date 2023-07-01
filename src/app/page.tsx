"use client"

import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <div className="bg-base-200 min-h-screen p-6">
      <header>
        <nav className="navbar bg-base-100">
          <div className="px-2 mx-2 navbar-start">
            <span className="text-lg font-bold">
              NeuroCache
            </span>
          </div> 
          <div className="hidden px-2 mx-2 navbar-center lg:flex">
            <div className="flex items-stretch">
              <a className="btn btn-ghost btn-sm rounded-btn">
                Home
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn">
                Features
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn">
                Pricing
              </a>
            </div>
          </div> 
        </nav>
      </header>

      <main className="container mx-auto">
        <section className="hero bg-base-100">
          <div className="flex-col hero-content lg:flex-row-reverse">
          <img src="/images/neurocache.png" className="w-64 h-64 object-contain" />
            <div>
              <h1 className="mb-5 text-5xl font-bold">
                Learn better, faster with NeuroCache.
              </h1>
              <p className="mb-5">
                NeuroCache is a tool for efficient learning using Spaced Repetition and Active Recall.
              </p>
              <button onClick={() => setShowModal(true)} className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section className="p-6">
          <div className="card shadow-lg compact side bg-base-100">
            <figure className="p-0">
              <img src="/images/neurocache.png" className="max-h-20 w-full object-cover"/>
            </figure>
            <div className="justify-end card-body">
              <h2 className="card-title">Image Card</h2> 
              <p>This is an example of a card component with an image.</p>
              <div className="card-actions">
                <button className="btn btn-outline btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* ... rest of your page content ... */}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
              <div className="modal-box">
                <h2 className="text-xl">Sign up to Get Started</h2>
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" />
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                    <button onClick={() => setShowModal(false)} className="btn ml-4">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        
        {toastMessage && (
          <div className="fixed bottom-4 right-4 toast toast-info">
            <div className="flex-auto">
              <button className="btn btn-clear float-right"></button>
              {toastMessage}
            </div>
          </div>
        )}
      </main>

      <footer className="p-10 footer bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Feature exploration</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Release notes</a>
        </div> 
        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">Company</a>
          <a className="link link-hover">Our team</a>
        </div> 
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">Support</a>
        </div>
      </footer>
    </div>
  );
}
