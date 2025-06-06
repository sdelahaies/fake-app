import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariant = {
  hover: { scale: 1.02 },
};

export default function HomeworkTimetableCards() {
  return (
    // <div className="bg-black-500 grid gap-6 md:grid-cols-2">
    <div className="bg-black h-screen w-screen-200 flex flex-col">
      {/* Homework Card */}
      <motion.div
        variants={cardVariant}
        whileHover="hover"
        title="homework"
        className="rounded-2xl bg-zinc-800 text-zinc-50 shadow-lg p-4 mt-10 ml-10 mr-10"
      >
        <Card className="bg-orange-100 border-none shadow-none">
          <CardHeader className="text-2xl font-bold">Homework</CardHeader>
          <CardContent>
            <section className="space-y-4">
              <div>
                <h3 className="text-sm uppercase text-zinc-400">For tomorrow</h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-base">
                  <li>
                    <span className="font-semibold">Math</span>: exercise 1 page 49, reproduce the sketches given on lecture 9
                  </li>
                  <li>
                    <span className="font-semibold">Biology</span>: review chapter 5 for evaluation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase text-zinc-400">For Tuesday 6 March</h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-base">
                  <li>
                    <span className="font-semibold">Sport</span>: bring running shoes and the appropriate outfits for outdoor activities
                  </li>
                  <li>
                    <span className="font-semibold">Music</span>: practice Donna Lee for our bebop session
                  </li>
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timetable Card */}
      <motion.div
        variants={cardVariant}
        whileHover="hover"
        title="timetable"
        className="rounded-2xl bg-zinc-800 text-zinc-50 shadow-lg p-4 mt-10 ml-10 mr-10"
      >
        <Card className="bg-orange-100 border-none shadow-none">
          <CardHeader className="text-2xl font-bold">Timetable</CardHeader>
          <CardContent>
            <ul className="space-y-2 text-base">
              <li>
                <span className="font-semibold">9:00-9:55</span>{" "}
                <span className="font-semibold">Math</span>{" "}
                <span className="text-zinc-400">room: TB05</span>
              </li>
              <li>
                <span className="font-semibold">10:00-10:55</span>{" "}
                <span className="font-semibold">English</span>{" "}
                <span className="text-zinc-400">room: TB02</span>
              </li>
              <li>
                <span className="font-semibold">11:00-11:55</span>{" "}
                <span className="font-semibold">Geography</span>{" "}
                <span className="text-zinc-400">room: CLT</span>
              </li>
              <li className="pt-2 uppercase text-zinc-400">Lunch break</li>
              <li>
                <span className="font-semibold">13:30-15:30</span>{" "}
                <span className="font-semibold">Sport</span>{" "}
                <span className="text-zinc-400">room: CS</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
