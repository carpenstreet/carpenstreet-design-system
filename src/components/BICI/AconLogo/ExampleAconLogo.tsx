import { AconLogoProps } from './AconLogo.types.ts';
import ExampleWrapper from '../ExampleWrapper.tsx';
import AconLogo from './AconLogo.tsx';

export default function ExampleAconLogo(props: AconLogoProps) {
  return (
    <ExampleWrapper>
      <AconLogo {...props} />
    </ExampleWrapper>
  );
}
