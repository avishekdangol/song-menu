import { Button } from "@/shadcn/components/ui/button"
import { DoorOpen } from 'lucide-react';
import PropTypes from 'prop-types';

function Spline({ close }) {
  return (
    <div className="absolute left-0 right-0 w-screen h-screen bg-white z-10">
      <Button
        className="absolute right-[20px] bottom-[16px] bg-teal-700 hover:bg-teal-600 text-xl z-10"
        onClick={close}
      >
        <DoorOpen /> &nbsp;Close and Go Back
      </Button>      
      <spline-viewer url="https://prod.spline.design/IUvRUQ3X7PgPtNEo/scene.splinecode"></spline-viewer>
    </div>
  );
}

Spline.propTypes = {
  close: PropTypes.func.isRequired
}

export default Spline