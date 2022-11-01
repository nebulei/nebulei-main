import { FaArrowRight } from 'react-icons/fa'

const AccBtn = () => {
  return (
    <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
        Already have an account?
        <FaArrowRight className='w-4 h-4 ml-3'/>
    </button>
  );
};

export default AccBtn;