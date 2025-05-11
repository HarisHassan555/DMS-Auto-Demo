import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    {
      name: 'Home',
      icon: 'home',
      route: '/'
    },
    {
      name: 'Sales',
      icon: 'point_of_sale',
      submenu: [
        { name: 'Sale Order', route: '/sales/order' },
        { name: 'Sale Order View', route: '/sales/order-view' },
        { name: 'PSO Payment', route: '/sales/pso-payment' },
        { name: 'Sale Order Approval', route: '/sales/order-approval' },
        { name: 'Sale Order Approval L2', route: '/sales/order-approval-l2' },
        { name: 'Sale Order Approval L3', route: '/sales/order-approval-l3' },
        { name: 'Approved Sale Orders', route: '/sales/approved-orders' },
        { name: 'Sale Certificate', route: '/sales/certificate' },
        { name: 'Sale Invoice', route: '/sales/invoice' },
        { name: 'Sales Gate Pass', route: '/sales/gate-pass' },
        { name: 'SO Payment Approval', route: '/sales/payment-approval' }
      ]
    },
    {
      name: 'Master Data',
      icon: 'storage',
      submenu: [
        { name: 'Country', route: '/master/country' },
        { name: 'City', route: '/master/city' },
        { name: 'Booking Type', route: '/master/booking-type' },
        { name: 'Customer Category', route: '/master/customer-category' },
        { name: 'Dealer', route: '/master/dealer' },
        { name: 'Customer', route: '/master/customer' },
        { name: 'Vehicle Category', route: '/master/vehicle-category' },
        { name: 'Vehicle', route: '/master/vehicle' },
        { name: 'Dealer Product', route: '/master/dealer-product' },
        { name: 'Delivery Quota', route: '/master/delivery-quota' },
        { name: 'Banks', route: '/master/banks' },
        { name: 'Division', route: '/master/division' },
        { name: 'Sale Organization', route: '/master/sale-organization' },
        { name: 'Distribution Channel', route: '/master/distribution-channel' },
        { name: 'Region', route: '/master/region' },
        { name: 'Sub Region', route: '/master/sub-region' },
        { name: 'Area', route: '/master/area' }
      ]
    },
    {
      name: 'User Management',
      icon: 'group',
      submenu: [
        { name: 'Users', route: '/users' },
        { name: 'Password Policy', route: '/users/password-policy' },
        { name: 'Change Password', route: '/users/change-password' },
        { name: 'Customer Password Change', route: '/users/customer-password-change' }
      ]
    },
    {
      name: 'Deals',
      icon: 'local_offer',
      submenu: [
        { name: 'Deal', route: '/deals/deal' },
        { name: 'Deal View', route: '/deals/deal-view' },
        { name: 'Sale Order From Deal', route: '/deals/sale-order-from-deal' },
        { name: 'Deal Payment', route: '/deals/deal-payment' },
        { name: 'Deal Customer', route: '/deals/deal-customer' }
      ]
    },
    {
      name: 'Services',
      icon: 'build',
      submenu: [
        { name: 'Service Customer', route: '/services/customer' },
        { name: 'Phenomenon', route: '/services/phenomenon' },
        { name: 'Trouble', route: '/services/trouble' },
        { name: 'Services', route: '/services/list' },
        { name: 'Make', route: '/services/make' },
        { name: 'Job Category', route: '/services/job-category' },
        { name: 'Job Type', route: '/services/job-type' },
        { name: 'Model', route: '/services/model' },
        { name: 'Color', route: '/services/color' },
        { name: 'Vehicle Detail', route: '/services/vehicle-detail' },
        { name: 'Job Card', route: '/services/job-card' },
        { name: 'Job Card Inquiry', route: '/services/job-card-inquiry' },
        { name: 'TIR', route: '/services/tir' },
        { name: 'TIR Inquiry', route: '/services/tir-inquiry' },
        { name: 'L1 TIR Service Department Approval', route: '/services/tir-approval-l1' },
        { name: 'L2 Service Department Approval', route: '/services/tir-approval-l2' },
        { name: 'L3 Service Department Approval', route: '/services/tir-approval-l3' },
        { name: 'TIR Tracking View', route: '/services/tir-tracking' },
        { name: 'Post Service Follow Up (CSI)', route: '/services/follow-up-csi' },
        { name: 'Maintenance Follow Up', route: '/services/follow-up-maintenance' },
        { name: 'Sales Follow Up (SSI)', route: '/services/follow-up-ssi' },
        { name: 'FFS Follow Up', route: '/services/follow-up-ffs' }
      ]
    },
    {
      name: 'Transfer',
      icon: 'swap_horiz',
      submenu: [
        { name: 'Tool Setup', route: '/transfer/tool-setup' },
        { name: 'Vehicle Transfer', route: '/transfer/vehicle-transfer' },
        { name: 'Vehicle Receive', route: '/transfer/vehicle-receive' },
      ]
    },
    {
      name: 'Claim',
      icon: 'gavel',
      submenu: [
        { name: 'Claims', route: '/claim/claims' },
        { name: 'Claim Inquiry', route: '/claim/inquiry' },
        { name: 'Service L1', route: '/claim/service-l1' },
        { name: 'Service L2', route: '/claim/service-l2' },
        { name: 'Service L3', route: '/claim/service-l3' },
        { name: 'Audit Dept L4', route: '/claim/audit-l4' },
        { name: 'Finance Dept L5', route: '/claim/finance-l5' },
        { name: 'Claim Tracking View', route: '/claim/tracking-view' },
        { name: 'Claim Invoice', route: '/claim/invoice' }
      ]
    },
    {
      name: 'CRM',
      icon: 'people',
      submenu: [
        { name: 'Lead Source', route: '/crm/lead-source' },
        { name: 'Lead Questionnaire for Cancel', route: '/crm/lead-questionnaire-cancel' },
        { name: 'Lead', route: '/crm/lead' },
        { name: 'Leads View', route: '/crm/leads-view' },
        { name: 'Complain', route: '/crm/complain' },
        { name: 'Inquiry', route: '/crm/inquiry' },
        { name: 'Dashboard', route: '/crm/dashboard' }
      ]
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      submenu: [
        { name: 'Job Card Dashboard', route: '/dashboard/job-card' },
        { name: 'Claims Dashboard', route: '/dashboard/claims' },
        { name: 'Complaints Dashboard', route: '/dashboard/complaints' },
        { name: 'Complain Dashboard', route: '/dashboard/complain' },
        { name: 'Complain Dashboard Month Wise', route: '/dashboard/complain-monthly' },
        { name: 'Main Dashboard', route: '/dashboard/main' }
      ]
    },
    {
      name: 'SP Purchase',
      icon: 'shopping_cart',
      submenu: [
        { name: 'Spare Parts', route: '/sp-purchase/spare-parts' },
        { name: 'Purchase Order', route: '/sp-purchase/purchase-order' },
        { name: 'Purchase Order View', route: '/sp-purchase/purchase-order-view' },
        { name: 'Purchase Order Approval', route: '/sp-purchase/purchase-order-approval' },
        { name: 'Approved Purchase Order', route: '/sp-purchase/approved-purchase-order' },
        { name: 'Counter Sales', route: '/sp-purchase/counter-sales' },
        { name: 'Counter Sales View', route: '/sp-purchase/counter-sales-view' },
        { name: 'Dashboard', route: '/sp-purchase/dashboard' }
      ]
    },
    {
      name: 'Reports',
      icon: 'assessment',
      submenu: [
        { name: 'Sale Order Report', route: '/reports/sale-order' },
        { name: 'Sale Order Summary', route: '/reports/sale-order-summary' },
        { name: 'Sale Receipt Report', route: '/reports/sale-receipt' }
      ]
    }
  ];

  expandedIndex = -1;

  toggleSubmenu(index: number) {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }
}
