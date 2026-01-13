'use client';

import CTA from '@/components/CTA';
import { HighlightedHeading } from '@/components/HighlightedHeading';
import { useHomeCTAs } from '@/hooks/useHomeCTAs';

export default function TermsAndConditions() {
  const ctas = useHomeCTAs();

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="py-16 px-4 md:px-8 lg:px-16 mx-auto gap-10 items-center justify-center max-w-[1248px]">
        <HighlightedHeading
          text="Terms and Conditions"
          className="font-heading text-heading text-center mb-12"
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700 leading-relaxed text-body">
          
          {/* Section 1: Definitions */}
          <div id="definitions">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">1. Definitions</h3>
            <ul className="space-y-3 text-body">
              <li><strong className="text-gray-900">We/Us and We:</strong> means Wisedrive Technologies (M) Sdn. Bhd.</li>
              <li><strong className="text-gray-900">Agreement:</strong> means the agreement between Wisedrive and Customer where Wisedrive agrees to arrange for an Inspector to conduct an Inspection in accordance with these terms and conditions.</li>
              <li><strong className="text-gray-900">Cancellation Fee:</strong> means the amount payable by the Customer as stated in these terms and conditions.</li>
              <li><strong className="text-gray-900">Customer/You:</strong> means a Wisedrive customer who makes a booking for an Inspection.</li>
              <li><strong className="text-gray-900">Fee:</strong> means the amount payable by the Customer to Wisedrive for the Inspection as stated at <a href="https://www.wisedrive.com" className="text-blue-600 hover:underline">https://www.wisedrive.com</a>.</li>
              <li><strong className="text-gray-900">Inspection:</strong> means the visual audio and external inspection as well as test drive conducted by an Inspector on behalf of Wisedrive for the Customer in accordance with these terms and conditions.</li>
              <li><strong className="text-gray-900">Inspector:</strong> refers to the certified inspector who conducts the Inspection on behalf of Wisedrive. Inspectors are subject to availability and may be replaced with suitable third-party agents.</li>
              <li><strong className="text-gray-900">Report:</strong> means the written report produced by the Inspector as part of the Inspection, which includes the Customer's name and address, the inspected Vehicle's registration details and its location, whether the Vehicle passed or failed the Inspection, a list of checks performed (depending on the type of Inspection requested by the Customer) and a summary of any areas of concern that need attention from the Customer.</li>
              <li><strong className="text-gray-900">Report Checklist:</strong> means the list of aspects that will be or have been inspected by the Inspector as part of the Physical Inspection, which can be found at <a href="https://www.wisedrive.com" className="text-blue-600 hover:underline">https://www.wisedrive.com</a>.</li>
              <li><strong className="text-gray-900">Vehicle:</strong> means the vehicle for which the Customer requires the Inspector to conduct an Inspection.</li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-body mb-2">Wisedrive provides several different categories of Inspections, each involving different checks. Details regarding the different inspection categories and the checks involved can be found at <a href="https://www.wisedrive.com" className="text-blue-600 hover:underline">https://www.wisedrive.com</a> or by contacting <a href="tel:+60122559610" className="text-blue-600 hover:underline">+60 122559610</a>. Confirmation of the Inspection category selected by the Customer will be performed on the Vehicle.</p>
            </div>
          </div>

          {/* Section 2: General Scope */}
          <div id="general">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">2. General Scope</h3>
            <ol className="list-decimal ml-6 space-y-4 text-body">
              <li>Inspections are provided based on visual and external inspection only and are limited to the parts and/or items identified in the Report. The Inspection does not involve disassembly or interference with any structure, component, or internal mechanism. The Inspector will conduct a test drive on the Vehicle and produce a Report. There are certain parts of the Vehicle that will not be inspected. You should read the Report Checklist carefully to see what will not be inspected.</li>
              <li>A copy of the Report will be sent to you via email to the email address you provided when making the Inspection booking. Due to the nature of the internet and virus protection software used by your internet service provider or installed on your computer, it may not be guaranteed that the Report will be delivered via email in all cases. If you do not receive your Report within 24 hours after your Wisedrive Vehicle Inspection, you must notify Us as soon as possible so that We can resend the Report to you.</li>
              <li>Items listed in the Report Checklist as parts/items to be inspected, but which cannot be easily accessed on the Vehicle, will not be inspected. In such circumstances, We have no obligation to inspect and/or report on those parts/items, and the Inspector will mark the relevant sections in the Report accordingly.</li>
              <li>The Vehicle should be in a clean condition to ensure the Inspector can accurately see and report on the vehicle parts being inspected. If the vehicle is not clean, the Inspector reserves the right not to comment on those parts and will mark the Report Checklist accordingly. In this case, the Report Fee is still payable in full.</li>
            </ol>
          </div>

          {/* Section 3: Road Test */}
          <div id="road-test">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">3. Road Test Requirements</h3>
            <ol className="list-decimal ml-6 space-y-4 text-body">
              <li>To enable our Inspector to conduct a Road Test on your Vehicle, you must ensure that the vehicle contains sufficient quantities of:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Water</li>
                  <li>Oil</li>
                  <li>Petrol</li>
                </ul>
              </li>
              <li>Road tests are conducted in the area surrounding the Inspection. If the Vehicle is in an unsafe condition to be driven or contains insufficient quantities of oil, water and/or petrol, or if the Customer cannot confirm that the Vehicle has a valid roadworthiness certificate, the road test cannot be carried out during the Inspection.</li>
              <li>The payment for the Inspection is still payable in full and additional charges will be applied for any subsequent road test that you ask Us to conduct.</li>
              <li>The performance of a road test does not mean that our Inspector has seen a valid roadworthiness certificate.</li>
              <li>Obtaining the necessary permissions and access to the Vehicle is the responsibility of the Customer.</li>
              <li>The Customer must ensure that proper arrangements have been made (including obtaining any necessary permissions from the Vehicle owner) for the Inspection to be carried out at workshop premises or in an off-road area with a flat, hard, and dry surface.</li>
              <li>Our Inspector requires sufficient space to walk around the Vehicle and fully open all doors. Our Inspector also needs to have sufficient space to park his/her vehicle near the Inspection location.</li>
              <li>High-quality indoor lighting or sufficient sunlight (if the Inspection is performed outdoors) must be provided at the Inspection location. We cannot inspect the Vehicle in poor lighting or in dark conditions.</li>
            </ol>
          </div>

          {/* Section 4: Payment and Cancellation */}
          <div id="payment">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">4. Payment and Cancellation</h3>
            <ol className="list-decimal ml-6 space-y-4 text-body">
              <li>Payment must be made at the time of booking the Inspection.</li>
              <li>We reserve the right to refuse to conduct an Inspection or issue a Report for any vehicle: that cannot be reasonably accessed by the Inspector; or that appears to the Inspector as:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>not standard production (for example, but not limited to, a kit car)</li>
                  <li>has been modified or not used frequently (for example, showing signs of excessive corrosion on moving parts due to being left too long and could cause the Vehicle to be unsafe to drive without repairs)</li>
                  <li>unsafe to drive or is in an unroadworthy condition</li>
                </ul>
              </li>
              <li>Where the Customer fails to ensure proper arrangements for the Inspection to be carried out, as required, or has provided incorrect or incomplete information that prevents Us from carrying out the Inspection, you acknowledge that in such circumstances We are entitled to treat the Agreement as terminated and retain the Payment in full.</li>
              <li>If you wish Us to carry out another Inspection, you need to make an additional payment at the time of the new booking.</li>
              <li>You are entitled to cancel the Inspection and receive a full refund of the Payment if the cancellation is made at least 24 hours before the scheduled Inspection. After the Inspection has been carried out, no refund of the payment will be given.</li>
              <li>To cancel the Inspection, you must notify our Customer Support Team of your decision by sending an email to <a href="mailto:support.my@wisedrive.com" className="text-blue-600 hover:underline">support.my@wisedrive.com</a> or by calling <a href="tel:+60122559610" className="text-blue-600 hover:underline">+60 122559610</a>, Monday to Friday from 9 am to 5 pm.</li>
              <li>To enable us to locate your booking, you need to provide your name, address, telephone number, and booking reference number (as given in your booking confirmation) along with your cancellation request.</li>
            </ol>
          </div>

          {/* Section 5: Complaints */}
          <div id="complaints">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">5. Complaints</h3>
            <ol className="list-decimal ml-6 space-y-4 text-body">
              <li>If you have a complaint or are dissatisfied with any Inspection that has been carried out, please contact Us at <a href="tel:+60122559610" className="text-blue-600 hover:underline">+60 122559610</a> as soon as possible. We may need to conduct a re-inspection of the Vehicle to address that complaint, and you agree to allow Us to do so.</li>
              <li>No repairs should be undertaken or any parts of the vehicle replaced before a re-inspection is carried out by Us. If emergency repairs are needed to ensure the Vehicle is safe to use and subsequently becomes the subject of a complaint to Us, you must ensure that the complaint is made to Us (including notification of the emergency repair requirement) within a reasonable period after the problem is discovered. Any damaged or worn parts that have been repaired or replaced must be retained for further inspection by Us. We will not be responsible under any circumstances for the cost of repairs or parts replacement without prior written agreement from Us.</li>
              <li>We reserve the right to require another of our Inspectors to conduct a re-inspection of any Vehicle at our own expense if deemed necessary to address any complaint. You are also required to allow our Inspector to carry out such re-inspection in accordance with these terms and conditions. We will provide an unbiased second opinion on the original Report issued.</li>
            </ol>
          </div>

          {/* Section 6: Matters Beyond Our Reasonable Control */}
          <div id="liability">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">6. Matters Beyond Our Reasonable Control</h3>
            <ol className="list-decimal ml-6 space-y-4 text-body">
              <li>We will not be responsible for any delay or inability to conduct an Inspection due to events or circumstances beyond our reasonable control. We will take steps to minimize the impact where possible.</li>
              <li>Wisedrive will only be responsible to the Customer (and not to any other party) if Wisedrive fails to perform the Inspection in accordance with these terms and conditions. Without limiting the above, you acknowledge that Wisedrive or the Inspector will not be liable to you or any other party for any liability, loss, damage, claim, proceeding, cost or expense (collectively referred to as "Losses") suffered or incurred in any of the following circumstances:</li>
              <li>Such Losses are not a reasonably foreseeable consequence of any breach (Losses are considered foreseeable if they could be anticipated by you and Us at the time the Vehicle Inspection was performed).</li>
              <li>Such Losses are not directly caused by a breach of these terms and conditions by Us or the Inspector.</li>
              <li>Such Losses relate to business losses or other losses to a customer who is not a consumer.</li>
              <li>Such Losses are increased as a result of a breach of any of these terms and conditions by you.</li>
              <li>Nothing in this document will affect a consumer's statutory rights under any applicable laws.</li>
            </ol>
          </div>

          {/* Section 7: Enforcement of Terms */}
          <div id="enforcement">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">7. Enforcement of Terms</h3>
            <ol className="list-decimal ml-6 space-y-4 text-body">
              <li>Each clause in these terms operates separately. If any court or relevant authority decides that any of them are invalid, the remaining clauses will remain in full force and effect.</li>
              <li>This Agreement is between you and Wisedrive. No other party has any right to enforce any term in this Agreement. We also do not need to get the agreement of any party to make any changes to these terms.</li>
            </ol>
          </div>

          {/* Section 8: Advice Regarding Report */}
          <div id="advice" className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3 font-heading">8. Advice Regarding Report</h3>
            <p className="text-blue-800 text-body">
              You are advised to discuss the findings in the Report with the seller before making a decision to purchase the Vehicle. If you have not seen the Vehicle personally, you must ensure that the cosmetic condition and specifications of the Vehicle are satisfactory and suitable for your requirements and expectations. We suggest that you view and drive the Vehicle yourself before making a purchase decision.
            </p>
          </div>

          <div className="pt-8">
            <CTA {...ctas.secure} />
          </div>
        </div>
      </section>
    </div>
  );
}