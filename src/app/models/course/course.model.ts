import { SafeResourceUrl, SafeUrl } from "@angular/platform-browser"

export interface course{
    courseId:number,
    courseName:string,
    instructorName:string,
    level:'Beginner' | 'Intermediate' | 'Advanced',
    category:string,
    description:string,
    isEnrolled?:boolean,
    videoUrl:string,
    sanitizedVideoUrl?:SafeResourceUrl,
    topics: topic[]
}

export interface topic{
    topicId:number,
    topicName:string,
    topicVideoUrl:string,
    topicPdfUrl?:string,
    isCompleted?:boolean
}