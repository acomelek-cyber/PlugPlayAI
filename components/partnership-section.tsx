import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Handshake, Shield, Users, TrendingUp, HelpCircle } from "lucide-react"

export function PartnershipSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Partnership Approach
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
            Built for Partnership—Empowering Your HOA Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            We enhance your existing platform without competing or disrupting your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Bolt-On Solution</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Plug-PlayAI is designed to enhance your existing HOA management software—we do not compete, replace, or
                disrupt your platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Handshake className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Joint Success Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We help you deliver 24/7 voice/chat AI and improve resident satisfaction, while you retain full control
                and branding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">White-Label Integration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Flexible white-label/co-branded integration options empower your team to own the resident experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">No Disruption</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                No customer migration, no platform disruption—just instant AI benefits for you and your clients.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Seamless Integration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Quick setup with minimal technical overhead, comprehensive API documentation, and ongoing integration
                support for smooth deployment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <HelpCircle className="h-8 w-8 text-blue-100 mr-3" />
                <h3 className="text-lg font-semibold text-white">FAQ Highlight</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-3 font-medium">"Are you a competing platform?"</p>
              <p className="text-blue-50 leading-relaxed">
                No, Plug-PlayAI is a technology partner dedicated to making your product better.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Handshake className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Partnership-First Approach</span>
          </div>
        </div>
      </div>
    </section>
  )
}
