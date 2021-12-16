import { coerce } from '../coerce';
import {coerceCssPixelValue} from "@angular/cdk/coercion";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const CoercePixel = coerce(coerceCssPixelValue);
