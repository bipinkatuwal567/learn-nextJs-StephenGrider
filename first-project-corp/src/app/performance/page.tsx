import Hero from "@/components/Hero";
import imgPerformance from "../../../public/performance.jpg";

console.log(imgPerformance);
export default function PerformancePage(){
    return <Hero imgData={imgPerformance} imgAlt="welding" title="We serve high performance applications" />
}