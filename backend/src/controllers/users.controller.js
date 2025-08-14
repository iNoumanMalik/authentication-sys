import { User } from "../models/users.model";
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const uploadDir = path.join(_dirname,'..','uploads')

