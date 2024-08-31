"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewsletterFormInputs, NewsletterFormSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { subscribe } from "./actions";

export default function NewletterForm() {
  const { toast } = useToast();

  const form = useForm<NewsletterFormInputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: NewsletterFormInputs) {
    const result = await subscribe(values);

    if (result?.error) {
      toast({
        description: "Something wrong. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({ description: "Subscribed successfully!" });

    form.reset();
  }

  return (
    <section className="pb-20">
      <div className="container max-w-3xl">
        <Card className="rounded-lg border-0 dark:border">
          <CardContent className="flex flex-col gap-8 pt-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Subscribe to my newsletter</h2>
              <p className="text-muted-foreground">
                Get updates on my work and projects.
              </p>
            </div>

            <div className="flex-1">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex w-full flex-col gap-3"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full disabled:opacity-50"
                  >
                    {form.formState.isSubmitting
                      ? "Submitting..."
                      : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
