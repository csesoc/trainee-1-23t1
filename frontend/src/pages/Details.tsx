function Details () {
  return (
    <div className="container flex justify-center items-center min-h-screen bg-theme-yellow">
      <div className="container flex-auto max-w-md max-h-min px-10 py-5 rounded-xl shadow-md bg-theme-white">
        <p className="font-bold text-3xl mb-2">Your Details</p>
        <p className="text-sm">So we can match you with the best possible partner 👯</p>
        <br />
        <form>
          <div className="container flex items-start flex-col text-left">
            <label className="text-sm">Degree</label>
            <input type="text" className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="What do you study?"></input>
            <label className="text-sm mt-4">Year of Study</label>
            <input type="number" className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="1"></input>
            <label className="text-sm mt-4">WAM (optional)</label>
            <select className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Confirm your password">
              <option value="HD">none</option>
              <option value="HD">HD</option>
              <option value="HD">DN</option>
              <option value="HD">CR</option>
              <option value="HD">PS</option>
              <option value="HD">FL</option>
            </select>
            <label className="text-sm mt-4">MBTI (optional)</label>
            <input type="text" className="form-input shadow w-full px-3 py-2 mt-2 rounded-xl border-0 text-sm" placeholder="Your personality type"></input>
            <p className="text-xs mt-2">Your Myers-Brigg personality type. This will be used to measure compatability across possible partners. 
              <a className="text-xs text-theme-blue" href="https://www.16personalities.com/" target="_blank"> Take the quiz here!</a>  
            </p>
            <button className="w-full px-2 py-3 rounded-xl border-0 mt-4 bg-theme-red hover:bg-[#e37876]">
              <p className="font-bold">Find your partnr!</p>
            </button> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Details;