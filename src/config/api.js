export const API_BASE_URL = "http://localhost:9090/api";
import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;