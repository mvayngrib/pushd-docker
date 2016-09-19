# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "private_network", type: "dhcp"
  config.vm.network :forwarded_port, guest: 8080, host: 8080

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
  end

  config.vm.synced_folder ".", "/vagrant", type: "nfs"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provision.yml"
  end
end
