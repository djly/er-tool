// File: src/app/interfaces/storage.interface.tsx
import { Union } from "@/app/classes/union.class";
interface LocalStorageObject {
    roster :  number[],  //unitId
    union: Union;
  }