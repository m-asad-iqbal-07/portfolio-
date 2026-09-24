import fs from 'node:fs';import {validateContent,auditSettings} from './config.mjs';
try{const data=JSON.parse(fs.readFileSync('src/content/managed.json','utf8'));validateContent(data);console.log('Content and SEO configuration valid.');for(const f of auditSettings(data))console.log(`[${f.level}] ${f.page}: ${f.message}`);}catch(e){console.error(e.message);process.exitCode=1;}
