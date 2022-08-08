class Shared::Navbar < Bridgetown::Component
  def initialize(metadata:, resource:)
    @metadata, @resource = metadata, resource
  end

  def highlight?(page)
    return false if page.empty?
    @resource.data.slug.to_s == page.to_s
  end
end
