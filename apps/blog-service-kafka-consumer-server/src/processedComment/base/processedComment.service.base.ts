/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProcessedComment as PrismaProcessedComment,
} from "@prisma/client";

export class ProcessedCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProcessedCommentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.processedComment.count(args);
  }

  async processedComments<T extends Prisma.ProcessedCommentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcessedCommentFindManyArgs>
  ): Promise<PrismaProcessedComment[]> {
    return this.prisma.processedComment.findMany<Prisma.ProcessedCommentFindManyArgs>(
      args
    );
  }
  async processedComment<T extends Prisma.ProcessedCommentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcessedCommentFindUniqueArgs>
  ): Promise<PrismaProcessedComment | null> {
    return this.prisma.processedComment.findUnique(args);
  }
  async createProcessedComment<T extends Prisma.ProcessedCommentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcessedCommentCreateArgs>
  ): Promise<PrismaProcessedComment> {
    return this.prisma.processedComment.create<T>(args);
  }
  async updateProcessedComment<T extends Prisma.ProcessedCommentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcessedCommentUpdateArgs>
  ): Promise<PrismaProcessedComment> {
    return this.prisma.processedComment.update<T>(args);
  }
  async deleteProcessedComment<T extends Prisma.ProcessedCommentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProcessedCommentDeleteArgs>
  ): Promise<PrismaProcessedComment> {
    return this.prisma.processedComment.delete(args);
  }
}
