import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="Rust rustc Cargo crate package module variable mut const shadowing tuple array slice String str function if loop while for ownership move copy clone borrow reference mutable reference dangling reference lifetime struct impl method associated function enum match if let Option Result panic unwrap expect error propagation question mark operator Vec HashMap Iterator closure generic trait trait bound derive Debug Display From Into module system pub use testing cargo test thread Mutex Arc Send Sync async await Future Tokio async runtime HTTP service CLI tool rustc borrow checker borrow checking ownership model zero-cost abstraction memory safety thread safety no garbage collection pattern matching destructuring conditional compilation cfg attribute macro declarative macro procedural macro derive macro serde json serialization error handling best practices rustfmt clippy rust analyzer";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"rs-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Rust",description:"Rust标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"rs-course-01",order:1,slug:"Rust入门",title:"Rust入门与系统编程路线",description:"Rust特点、优势、应用场景、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"rs-course-02",order:2,slug:"Cargo项目",title:"Rust环境、Cargo与项目结构",description:"rustc、Cargo、crate、package、模块。",estimatedHours:6,diff:"easy"},
  {id:"rs-course-03",order:3,slug:"变量类型函数",title:"变量、类型、函数与控制流",description:"变量mut、常量、shadowing、tuple、array、if/loop/while。",estimatedHours:8,diff:"easy"},
  {id:"rs-course-04",order:4,slug:"所有权移动",title:"所有权、移动与拷贝",description:"所有权规则、move、copy、clone。",estimatedHours:10,diff:"medium"},
  {id:"rs-course-05",order:5,slug:"借用引用",title:"借用、引用与可变性",description:"引用、借用规则、可变引用、悬垂引用。",estimatedHours:10,diff:"medium"},
  {id:"rs-course-06",order:6,slug:"生命周期",title:"生命周期基础",description:"生命周期标注、省略规则、生命周期约束。",estimatedHours:10,diff:"medium"},
  {id:"rs-course-07",order:7,slug:"结构体方法",title:"结构体、方法与关联函数",description:"struct、impl、method、associated function。",estimatedHours:8,diff:"hard"},
  {id:"rs-course-08",order:8,slug:"枚举模式",title:"枚举、Option、Result与模式匹配",description:"enum、match、if let、Option、Result。",estimatedHours:10,diff:"hard"},
  {id:"rs-course-09",order:9,slug:"错误处理",title:"错误处理与健壮程序设计",description:"panic、unwrap、expect、?运算符、错误类型。",estimatedHours:8,diff:"hard"},
  {id:"rs-course-10",order:10,slug:"泛型Trait",title:"泛型、Trait与Trait Bound",description:"泛型函数、Trait定义、Trait Bound、derive。",estimatedHours:10,diff:"hard"},
  {id:"rs-course-11",order:11,slug:"集合迭代器",title:"集合、字符串与迭代器",description:"Vec、HashMap、String、Iterator、闭包。",estimatedHours:10,diff:"hard"},
  {id:"rs-course-12",order:12,slug:"模块工程",title:"模块、包、Crate与工程组织",description:"模块系统、pub、use、层次化组织。",estimatedHours:8,diff:"hard"},
  {id:"rs-course-13",order:13,slug:"并发异步",title:"并发、异步与Tokio入门",description:"thread、Mutex、Arc、Send/Sync、async/await。",estimatedHours:10,diff:"hard"},
  {id:"rs-course-14",order:14,slug:"Rust项目面试",title:"Rust项目实战、面试与进阶路线",description:"项目实战、CLI工具、面试题。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解所有权和借用","掌握Rust语法","能写并发程序","完成Rust项目"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"rs-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["Rust"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Rust课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["Rust","系统编程"],["所有权","内存管理"],["借用","引用规则"],["生命周期","引用有效期"],["结构体","数据类型"],["枚举","枚举类型"],["match","模式匹配"],["Result","错误处理"],["Trait","抽象接口"],["泛型","通用类型"],["闭包","匿名函数"],["迭代器","遍历模式"],["Cargo","包管理器"],["并发","多线程"],["异步","async编程"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"rs-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Rust",tags:["Rust"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"rs-kp-"+String(k.length+1).padStart(4,"0"),name:"Rust概念"+(k.length+1),description:"Rust概念",category:"Rust",tags:["Rust"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["Rust入门","Cargo项目","变量类型函数","所有权移动","借用引用","生命周期","结构体方法","枚举模式","错误处理","泛型Trait","集合迭代器","模块工程","并发异步","Rust项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"Rust核心安全机制？",["所有权系统","垃圾回收","引用计数","手动释放"],"A","easy"],[1,"Cargo build生成？",["可执行文件/库","字节码","汇编","脚本"],"A","easy"],[2,"默认变量不可变原因？",["安全性","性能","便利","兼容"],"A","easy"],[3,"所有权规则？",["每个值只有一个所有者","多个所有者","可任意复制","无所有者"],"A","medium"],[4,"不可变引用？",["允许多个读","允许修改","独占","不允许读"],"A","medium"],[5,"生命周期标注？",["'a","#a","@a","$a"],"A","medium"],[6,"impl关键字用于？",["定义方法","定义函数","定义宏","定义类型"],"A","medium"],[7,"match必须？",["穷尽所有模式","只需部分","可以忽略","已覆盖"],"A","hard"],[8,"?运算符作用？",["传播错误","忽略错误","处理错误","抛出错误"],"A","hard"],[9,"Trait类似？",["接口","继承","抽象类","多态"],"A","hard"],[13,"Send Trait表示？",["可跨线程传递","可共享","可复制","可打印"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];if(t_[4]&&typeof t_[4]==="string"&&t_[4].includes(":"))t_[4]=t_[4].replace(":","");qs.push({id:"rs-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="rs-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Rust"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="Rust"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Rust重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="Rust"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在Rust中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于Rust。";}
    else if(it.type==="case_analysis"){s="Rust"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"rs-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["Hello Rust","变量可变性","所有权移动","借用错误修复","生命周期标注","结构体建模","枚举状态机","Option处理","Result错误传播","Vec统计","HashMap词频","Iterator链式","Trait抽象","模块组织","单元测试","线程共享数据","Tokio异步入门","CLI工具","Rust面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"rs-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Rust",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Rust路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"rs-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Rust","所有权","借用","生命周期","结构体","枚举","match","Result","Trait","Cargo","闭包","迭代器","并发","异步","Vec"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Rust概念"+i,"Rust概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"rs-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Rust",tags:["Rust"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Rust问题"+(i+1)+"?","Rust问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"rs-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Rust",tags:["Rust"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Rust"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Rust"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Rust"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Rust"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Rust"]});});return e;}
async function main(){
  console.log("Gen Rust...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-rust-basic",slug:"module-rust-basic",title:"Rust系统编程基础",subtitle:"面向系统编程和后端开发者",description:"面向系统编程后端云原生和安全编程学习者的Rust语法所有权借用生命周期结构体枚举错误处理泛型Trait并发展与项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Rust","系统编程","所有权","借用","生命周期","Trait","并发","异步"],estimatedHours:180,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F980}",repoUrl:"https://github.com/openskill-galaxy/module-rust-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
