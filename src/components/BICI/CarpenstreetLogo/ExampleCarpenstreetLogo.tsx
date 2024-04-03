import { CarpenstreetLogoProps } from './CarpenstreetLogo.types.ts';
import ExampleWrapper from '../ExampleWrapper.tsx';
import CarpenstreetLogo from './CarpenstreetLogo.tsx';

export default function ExampleCarpenstreetLogo(props: CarpenstreetLogoProps) {
  return (
    <ExampleWrapper>
      <CarpenstreetLogo {...props} />
    </ExampleWrapper>
  );
}
