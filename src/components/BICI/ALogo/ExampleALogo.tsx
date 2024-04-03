import { ALogoProps } from './ALogo.types.ts';
import ExampleWrapper from '../ExampleWrapper.tsx';
import ALogo from './ALogo.tsx';

export default function ExampleALogo(props: ALogoProps) {
  return (
    <ExampleWrapper>
      <ALogo {...props} />
    </ExampleWrapper>
  );
}
