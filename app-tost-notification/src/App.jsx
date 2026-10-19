import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){

    function submit(){
      toast.success('Submit')
      toast.warning('Warning')
      toast.info('info')
      toast.error('error')

      


    }
    

  return(
    <>
    <button onClick={submit}>Click me....!</button>
    <ToastContainer/>
    </>
  )
}

export default App;